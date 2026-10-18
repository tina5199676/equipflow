<?php

namespace Database\Seeders;

use App\Models\Equipment;
use Illuminate\Database\Seeder;

class EquipmentSeeder extends Seeder
{
    public function run(): void
    {
        $equipments = [
            [
                'name'          => '3樓會議室空調',
                'type'          => '空調',
                'serial_number' => 'AC-2021-003',
                'status'        => 'maintenance',
                'location'      => '3樓會議室',
                'purchase_date' => '2021-03-15',
                'description'   => '示範用變頻空調設備',
            ],
            [
                'name'          => 'B1監控攝影機',
                'type'          => '監控',
                'serial_number' => 'CAM-2020-B01',
                'status'        => 'broken',
                'location'      => 'B1停車場',
                'purchase_date' => '2020-06-01',
                'description'   => '示範用監視攝影設備',
            ],
            [
                'name'          => '5樓消防灑水頭',
                'type'          => '消防',
                'serial_number' => 'SPR-2019-501',
                'status'        => 'active',
                'location'      => '5樓走廊',
                'purchase_date' => '2019-08-20',
                'description'   => '模擬消防灑水設備',
            ],
            [
                'name'          => '2號電梯',
                'type'          => '電梯',
                'serial_number' => 'ELV-2018-002',
                'status'        => 'maintenance',
                'location'      => '大樓中央',
                'purchase_date' => '2018-01-10',
                'description'   => '示範用電梯設備',
            ],
            [
                'name'          => '4樓網路交換器',
                'type'          => '網路',
                'serial_number' => 'SW-2022-401',
                'status'        => 'broken',
                'location'      => '4樓機房',
                'purchase_date' => '2022-05-15',
                'description'   => '示範用網路交換器',
            ],
            [
                'name'          => '1樓大廳空調',
                'type'          => '空調',
                'serial_number' => 'AC-2020-001',
                'status'        => 'active',
                'location'      => '1樓大廳',
                'purchase_date' => '2020-01-05',
                'description'   => '模擬中央空調設備',
            ],
        ];

        foreach ($equipments as $equipment) {
            Equipment::create($equipment);
        }
    }
}