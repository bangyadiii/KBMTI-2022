<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnnouncementStaffMudaRequest;
use App\Http\Requests\RegisterStaffMudaRequest;
use App\Models\StaffMuda;
use Illuminate\Support\Str;
use Inertia\Inertia;

class StaffMudaController extends Controller
{
    public function index()
    {
        return Inertia::render('Sth/RegisterStaffMuda');
    }
    public function store(RegisterStaffMudaRequest $request)
    {
        $validated = $request->validated();
        $validated["unique_code"] = Str::random(8);
        $staff = StaffMuda::create($validated);
        if (!$staff) {
            return \redirect(route("staff-muda.index"))->with("error", "Error while registering");
        }

        return \redirect()
            ->route("staff-muda.index")
            ->with("success", "Selamat! Anda telah berhasil registrasi staff muda KBMTI.");
    }
    public function announcements()
    {
        return Inertia::render("Sth/StaffMudaAnnouncement");
    }

    public function show(AnnouncementStaffMudaRequest $request)
    {
        $validated = $request->validated();
        $nim = $validated["nim"];
        $uniqueCode = $validated["unique_code"];
        $staffMuda = StaffMuda::where("nim", $nim)->first();
        if (!$staffMuda) {
            return back()
                ->with("error", "Maaf, NIM kamu tidak terdaftar pada sistem kami.");
        }
        if ($staffMuda->unique_code !== $uniqueCode) {
            return back()
                ->with("error", "Kode unik yang kamu masukan salah.");
        }
        return inertia("Sth/StaffMudaAnnouncement", ["staff_muda" => $staffMuda]);
    }
}
