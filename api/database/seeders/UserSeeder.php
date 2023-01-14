<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'username' => 'testuser01',
                'email' => 'test01@test.com',
                'password' => Hash::make('12345678'),
            ],
            [
                'username' => 'user2',
                'email' => 'user2@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'username' => 'user3',
                'email' => 'user3@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'username' => 'user4',
                'email' => 'user4@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'username' => 'user5',
                'email' => 'user5@example.com',
                'password' => Hash::make('password'),
            ],
        ]);
    }
}