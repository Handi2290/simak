<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProgramStudiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //kode pt 213452
        \DB::statement('DELETE FROM pe3_prodi');
        \DB::statement('ALTER TABLE pe3_prodi AUTO_INCREMENT = 1;');

        \DB::table('pe3_prodi')->insert([            
            'kode_prodi'=>'57201',
            'nama_prodi'=>'SISTEM INFOMRASI',
            'nama_prodi_alias'=>'SI',
            'kode_jenjang'=>'C',
            'nama_jenjang'=>'S-1',
        ]);              

        \DB::table('pe3_prodi')->insert([            
            'kode_prodi'=>'55201',
            'nama_prodi'=>'TEKNIK INFORMATIKA',
            'nama_prodi_alias'=>'IF',
            'kode_jenjang'=>'C',
            'nama_jenjang'=>'S-1',
        ]);              
        
    }
}
