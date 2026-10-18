import { defineStore } from "pinia";
import { ref, computed } from "vue";
import equipmentService from "@/services/equipmentService";

const mockEquipments = [
  {
    id: 1,
    name: "3樓會議室空調",
    type: "空調",
    serial_number: "AC-2021-003",
    status: "maintenance",
    location: "3樓會議室",
    purchase_date: "2021-03-15",
    description: "示範用變頻空調設備",
  },
  {
    id: 2,
    name: "B1監控攝影機",
    type: "監控",
    serial_number: "CAM-2020-B01",
    status: "broken",
    location: "B1停車場",
    purchase_date: "2020-06-01",
    description: "示範用監視攝影設備",
  },
  {
    id: 3,
    name: "5樓消防灑水頭",
    type: "消防",
    serial_number: "SPR-2019-501",
    status: "active",
    location: "5樓走廊",
    purchase_date: "2019-08-20",
    description: "模擬消防灑水設備",
  },
  {
    id: 4,
    name: "2號電梯",
    type: "電梯",
    serial_number: "ELV-2018-002",
    status: "maintenance",
    location: "大樓中央",
    purchase_date: "2018-01-10",
    description: "示範用電梯設備",
  },
  {
    id: 5,
    name: "4樓網路交換器",
    type: "網路",
    serial_number: "SW-2022-401",
    status: "broken",
    location: "4樓機房",
    purchase_date: "2022-05-15",
    description: "示範用網路交換器",
  },
  {
    id: 6,
    name: "1樓大廳空調",
    type: "空調",
    serial_number: "AC-2020-001",
    status: "active",
    location: "1樓大廳",
    purchase_date: "2020-01-05",
    description: "模擬中央空調設備",
  },
];

export const useEquipmentStore = defineStore("equipment", () => {
  // State
  const equipments = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const useMock = ref(false);

  // Getters
  const totalEquipments = computed(() => equipments.value.length);

  const activeCount = computed(
    () => equipments.value.filter((e) => e.status === "active").length,
  );

  const maintenanceCount = computed(
    () => equipments.value.filter((e) => e.status === "maintenance").length,
  );

  const brokenCount = computed(
    () => equipments.value.filter((e) => e.status === "broken").length,
  );

  // Actions
  async function fetchEquipments(params = {}) {
    loading.value = true;
    error.value = null;
    try {
      if (useMock.value) {
        await new Promise((r) => setTimeout(r, 300));
        equipments.value = mockEquipments;
      } else {
        const res = await equipmentService.getAll(params);
        equipments.value = res.data || res;
      }
    } catch (err) {
      error.value = "載入設備資料失敗";
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  async function createEquipment(data) {
    loading.value = true;
    try {
      if (useMock.value) {
        await new Promise((r) => setTimeout(r, 300));
        const newEquipment = {
          ...data,
          id: equipments.value.length + 1,
        };
        equipments.value.unshift(newEquipment);
        return newEquipment;
      } else {
        const res = await equipmentService.create(data);
        equipments.value.unshift(res.data || res);
        return res;
      }
    } catch (err) {
      error.value = "新增設備失敗";
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  async function deleteEquipment(id) {
    try {
      if (useMock.value) {
        equipments.value = equipments.value.filter((e) => e.id !== id);
      } else {
        await equipmentService.delete(id);
        equipments.value = equipments.value.filter((e) => e.id !== id);
      }
    } catch (err) {
      error.value = "刪除設備失敗";
      console.error(err);
    }
  }

  return {
    equipments,
    loading,
    error,
    useMock,
    totalEquipments,
    activeCount,
    maintenanceCount,
    brokenCount,
    fetchEquipments,
    createEquipment,
    deleteEquipment,
  };
});
