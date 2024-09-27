import FrontPageLayout from "@/Layouts/FrontPageLayout";
import { Head } from "@inertiajs/inertia-react";
import Hero from "@/Sections/Hero";
import React from "react";

function LandingPage(props) {
    return (
        <FrontPageLayout>
            <Head title="Home" />
            <div className="overflow-x-hidden">
                <Hero />
                <div className="my-28 w-full md:w-10/12 lg:w-6/12 sm:mx-auto">
                    <h2 className="font-thin font-[proxima-nova] text-3xl md:text-[2.5rem]  text-center tracking-wide px-6">
                        Bergabungnya dua kata indah Sthira dan Loka merupakan
                        harapan untuk EMTI
                    </h2>
                </div>
                <div className="flex flex-col">
                    {/* VISI EMTI */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:mx-44 lg:mx-16 mx-8 mt-24">
                        <div className="flex justify-center">
                            <img src='/public/img/logo berwarna.png' width="300px" className="object-contain"></img>
                        </div>
                        <div className="w-full px-10 sm:ml-auto self-end">
                            <h2 className="mb-12 lg:text-right text-4xl font-semibold text-center lg:mt-0 mt-8">
                                Visi
                            </h2>
                            <div>
                                <p className="text-xl leading-10 text-center lg:text-right">
                                    Bergabungnya dua kata indah Sthira dan Loka
                                    merupakan harapan untuk EMTI EMTI sebagai wadah
                                    untuk merangkai asa dan karya dengan rasa solid
                                    berlandaskan kekeluargaan untuk mencapai makna
                                    sebenarnya dari berhimpun.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* MISI EMTI */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:mx-44 lg:mx-16 mx-8 mt-24">
                        <div className="w-full px-10 sm:ml-auto self-end">
                            <h2 className="mb-12 text-4xl font-semibold text-center lg:text-left lg:mt-0 mt-8">
                                Misi
                            </h2>
                            <div>
                                <ul className="text-xl leading-10 text-center lg:text-left">
                                    <li className="mb-3">
                                        Membangun suasana EMTI yang harmonis, solid,
                                        dan berdedikasi tinggi
                                    </li>
                                    <li className="mb-3">
                                        Menciptakan ruang bagi mahasiswa teknologi
                                        infomrasi untuk aktif bersuara dalam
                                        menggapai asa
                                    </li>
                                    <li className="mb-3">
                                        Optimalisasi layanan Advokasi yang
                                        responsive dan proaktif dalam
                                        mensejahterakan Teknologi Informasi
                                    </li>
                                    <li className="mb-3">
                                        Menciptakan lingkungan yang supportif dan
                                        kolaboratif agar tercipta solidaritas yang
                                        berkelanjutan.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center lg:order-none order-first">
                            <img src='/public/img/LOGO KBMTI.png' width="400px" className="object-contain"></img>
                        </div>
                    </div>
                    {/* ARAH GERAK */}
                    <div className="w-full px-10 my-32">
                        <h2 className="mb-12 text-4xl font-semibold text-center">
                            Arah Gerak
                        </h2>
                        <div className="text-center mb-5">
                          <div className="text-3xl block md:inline md:mb-0 mb-4 md:mr-10 mr-0">Solid Harmonis</div>
                          <div className="text-3xl block md:inline">Kontribusi Kolaboratif</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl block md:inline md:mb-0 mb-4">Pelayanan Responsif Proaktif</div>
                          <div className="text-3xl block md:inline md:ml-10 ml-0">Fleksibel Suportif</div>
                        </div>
                    </div>
                    <div className="px-10 xl:mx-44 lg:mx-16 mx-8 mt-24 mb-12">
                        <h2 className="mb-12 text-4xl font-semibold text-center">
                            Budaya Kerja
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div>
                            <h3 className="text-3xl mt-4 text-center">Positive and<br className="lg:block hidden"></br> Inspiring Vibes</h3>
                            <img src='/public/img/oh-kahim.webp' className="my-6"></img>
                            <p className="text-xl leading-10 text-center">EMTI periode ini akan berupaya menciptakan lingkungan yang positif serta menginspirasi satu sama lain agar segala yang dilakukan bisa lebih optimal</p>
                          </div>
                          <div>
                            <h3 className="text-3xl mt-4 text-center">Flexible<br className="lg:block hidden"></br> Collaboration</h3>
                            <img src='/public/img/first-gath-se.webp' className="my-6"></img>
                            <p className="text-xl leading-10 text-center">Untuk mendukung seluruh kegiatan di EMTI, kolaborasi yang dilakukan memiliki arah yang lebih fleksibel, tidak selalu vertikal atau horizontal saja.</p>
                          </div>
                          <div>
                            <h3 className="text-3xl mt-4 text-center">Sense of<br className="lg:block hidden"></br> Belonging</h3>
                            <img src='/public/img/oh-koor.webp' className="my-6"></img>
                            <p className="text-xl leading-10 text-center">Layaknya rumah, seluruh individu di EMTI diharapkan mempunyai rasa "saling memiliki" satu sama lain</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontPageLayout>
    );
}

export default LandingPage;
