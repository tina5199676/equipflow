<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name'       => '測試管理員',
            'email'      => 'admin@equipflow.example.invalid',
            'password'   => Hash::make(Str::random(40)),
            'role'       => 'admin',
            'department' => '示範資訊組',
        ]);

        User::create([
            'name'       => '測試員工',
            'email'      => 'staff@equipflow.example.invalid',
            'password'   => Hash::make(Str::random(40)),
            'role'       => 'staff',
            'department' => '示範行政組',
        ]);

        User::create([
            'name'       => '測試維修人員',
            'email'      => 'technician@equipflow.example.invalid',
            'password'   => Hash::make(Str::random(40)),
            'role'       => 'technician',
            'department' => '示範維護組',
        ]);
    }
}