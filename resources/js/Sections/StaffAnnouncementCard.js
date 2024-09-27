import React from "react";

function StaffAnnouncementCard({ dataStaff }) {
    return (
        <div className="w-full sm:w-3/5 mb-24 lg:mb-0 lg:h-[720px] lg:overflow-y-hidden flex flex-col mx-auto px-5 py-8 ">
            <h2 className="text-3xl font-[proxima-nova] mb-10 text-center">
                Pengumuman Hasil Seleksi Staff Muda KBMTI 2022
            </h2>

            <div className="w-full border-[1px] rounded-md p-3 sm:p-8">
                <div className="flex gap-x-10 sm:gap-x-24 mb-10">
                    <div className="flex-col ">
                        <div>Nama</div>
                        <div>NIM</div>
                        <div>Id Line</div>
                        <div>No HP</div>
                    </div>
                    <div className="flex-col">
                        <div>: {dataStaff.name}</div>
                        <div>: {dataStaff.nim}</div>
                        <div>: {dataStaff.id_line}</div>
                        <div>: {dataStaff.no_hp || <i>kosong</i>}</div>
                    </div>
                </div>

                <div className="flex flex-wrap ">
                    {dataStaff.status == "failed" && (
                        <div className="w-full mx-auto">
                            <h2
                                className={`py-5 text-center font-bold text-white font-sans tracking-widest bg-bermuda w-full mb-6`}
                            >
                                BELUM LOLOS
                            </h2>
                            <p>
                                Dear {dataStaff.name} !
                            </p>
                            <p className="mt-2">
                                Berdasarkan proses seleksi Staff Muda yang diadakan oleh Keluarga Besar Mahasiswa Teknologi Informasi (KBMTI) 2022, bersama ini kami sampaikan bahwa kamu dinyatakan TIDAK LOLOS SELEKSI dan belum dapat bergabung ke dalam program Staff Muda KBMTI 2022.
                            </p>
                            <p className="mt-2">
                                Dengan berat hati, mohon maaf kami belum dapat menerima kamu sebagai Staff Muda Terpilih KBMTI 2022. Jangan berkecil hati, semoga hal ini bukan menjadi halangan untuk kamu agar dapat berproses dan menjadi pribadi yang lebih baik meskipun di tempat lain.
                            </p>
                            <p className="mt-2">
                                Terima kasih atas kepercayaan kamu kepada KBMTI. Kami harap kamu tetap dapat memberikan kontribusi terhadap Teknologi Informasi kedepannya. Sampai jumpa di lain waktu!!
                            </p>
                            <p className="mt-2">
                                Terima kasih ~
                            </p>

                        </div>
                    )}
                    {/*  */}
                    {dataStaff.status == "pass" && (
                        <div className="w-full mx-auto">
                            <h2 className="py-5 text-center font-bold text-white font-sans tracking-widest bg-green-400 w-full mb-6">
                                LOLOS
                            </h2>
                            <p>
                                Dear {dataStaff.name} !
                            </p>
                            <p className="mt-2">
                                Setelah serangkaian proses seleksi Staff Muda yang diadakan oleh Keluarga Besar Mahasiswa Teknologi Informasi (KBMTI) kemarin, dan akhirnya kami memutuskan bahwa kamu dinyatakan BERHASIL menjadi salah satu Staff Muda Terpilih KBMTI 2022.
                            </p>
                            <p className="mt-2">
                                Selamat datang dan bergabung menjadi Staff Muda Keluarga Besar Mahasiswa Teknologi Informasi (KBMTI)!
                            </p>
                            <p className="mt-2">
                                Untuk itu, bagi Staff Muda Terpilih akan mendapatkan invitation untuk First Gathering Staff Muda KBMTI 2022, yang akan dilaksanakan pada :
                            </p>
                            <table className="mt-2">
                                <tr>
                                    <td>Hari</td>
                                    <td>:</td>
                                    <td>Minggu</td>
                                </tr>
                                <tr>
                                    <td>Tanggal</td>
                                    <td>:</td>
                                    <td>30 Oktober 2022</td>
                                </tr>
                                <tr>
                                    <td>Tempat</td>
                                    <td>:</td>
                                    <td>GKM</td>
                                </tr>
                                <tr>
                                    <td>Dresscode</td>
                                    <td>:</td>
                                    <td>back to 90s (bebas)</td>
                                </tr>
                            </table>

                            <p className="mt-2">
                                Kami tunggu kehadiran teman-teman pada acara First Gathering KBMTI 2022 agar dapat saling mengenal dan agar KBMTI menjadi tempat yang nyaman untuk mengembangkan diri kalian. See yaa, YOUNGSTERZ!!
                            </p>

                            <p className="mt-2">
                                Terima kasih ~
                            </p>

                            {/* <h4 className="text-center font-sans font-black text-lg">
                                Selamat, kamu lolos test menjadi Staff Muda
                                KBMTI 2022.
                            </h4>
                            <br />
                            <p className="text-center">
                                Pastikan kamu mengecek email kamu untuk
                                informasi lebih lanjut. Semangat berproses 😍
                            </p> */}
                        </div>
                    )}
                    {dataStaff.status == "pending" && (
                        <div className="w-full mx-auto text-center font-bold">
                            Data kamu masih diproses, mohon bersabar ya.. 🙏
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StaffAnnouncementCard;
