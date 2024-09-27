import FrontPageLayout from "@/Layouts/FrontPageLayout";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import { FaArrowCircleRight } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useState, useEffect, Fragment } from "react";
import FieldErrorValidation from "@/Components/FieldErrorValidation";
import Notifications from "@/Components/Notifications";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/inertia-react";

function RegisterStaffMuda(props) {
    const [isNotif, setIsNotif] = useState(false);
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    const {
        data,
        setData,
        post,
        processing,
        errors,
        wasSuccessful,
        hasErrors,
        reset,
    } = useForm({
        name: "",
        nim: "",
        angkatan: 2022,
        id_line: "",
        no_hp: "",
        berkas_link: "",
    });
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    useEffect(() => {
        if (
            props.flash.error != null ||
            props.flash.success !== null ||
            hasErrors
        )
            setIsNotif(true);
        else setIsNotif(false);
    }, [props.flash, hasErrors]);

    const submit = () => {
        post(route("staff-muda.store"));

        if (!wasSuccessful) {
            setData({
                name: data.name,
                nim: data.nim,
                angkatan: 2022,
                id_line: data.id_line,
                no_hp: data.no_hp,
                berkas_link: data.berkas_link,
            });
        } else reset(["name", "nim", "angkatan"]);
    };

    return (
        <FrontPageLayout>
            <div className="my-16 px-10 md:max-w-[85rem] md:mx-auto">
                <h1 className="text-center text-3xl md:text-4xl font-sans">
                    Pendaftaran Staff Muda
                </h1>
                <p className="text-center mt-4">
                    Staff Muda merupakan kegiatan untuk belajar, mengasah
                    softskill dan berkembang bersama KBMTI. Tujuannya agar
                    teman-teman yang mengikuti kegiatan ini akan mendapatkan
                    pembekalan hal-hal yang sudah disebutkan sebelumnya dan
                    dibimbing oleh teman-teman pengurus KBMTI.
                </p>
                <div className="flex flex-wrap w-full md:max-w-[85rem] mx-auto gap-10 items-center my-20">
                    <form
                        className="w-full md:w-6/12 flex flex-col gap-3"
                        onSubmit={submit}
                    >
                        <p>
                            Untuk berkasnya dapat diunduh{" "}
                            <a
                                href="https://drive.google.com/file/d/1esRTZlcu1q1wWxph-3-QrR1YozKzL7SW/view?usp=sharing"
                                className="text-indigo-600 underline"
                            >
                                di sini
                            </a>{" "}
                            ya Berkas diupload di Google Drive dan langsung isi
                            saja linknya di form.
                        </p>

                        <div>
                            {isNotif && (
                                <Notifications
                                    flash={props.flash}
                                    hasErrors={hasErrors}
                                />
                            )}
                        </div>
                        <div className="">
                            <Label className={"text-lg "} forInput={"name"}>
                                Name
                            </Label>

                            <Input
                                htmlId={"name"}
                                name={"name"}
                                value={data.nama}
                                placeholder="Nama"
                                isError={errors.name ? true : false}
                                className={"w-full"}
                                handleChange={onHandleChange}
                            />
                            {errors.name && (
                                <FieldErrorValidation error={errors.name} />
                            )}
                        </div>
                        <div>
                            <Label className="text-lg" forInput={"nim"}>
                                NIM
                            </Label>
                            <Input
                                htmlId={"nim"}
                                name={"nim"}
                                placeholder="NIM"
                                className="w-full"
                                value={data.nim}
                                required
                                isError={errors.nim ? true : false}
                                handleChange={onHandleChange}
                            />
                            {errors.nim && (
                                <FieldErrorValidation error={errors.nim} />
                            )}
                        </div>
                        <div>
                            <Label forInput={"angkatan"} className="text-lg">
                                Angkatan
                            </Label>
                            <Input
                                htmlId={"angkatan"}
                                name={"angkatan"}
                                className="w-full"
                                value={data.angkatan}
                                isError={errors.angkatan ? true : false}
                                handleChange={onHandleChange}
                                required
                                disable
                            />

                            {errors.angkatan && (
                                <FieldErrorValidation error={errors.angkatan} />
                            )}
                        </div>
                        <div className="flex justify-between gap-3">
                            <div className="w-1/2">
                                <Label forInput={"id_line"} className="text-lg">
                                    ID Line
                                </Label>
                                <Input
                                    htmlId={"id_line"}
                                    name={"id_line"}
                                    className="w-full"
                                    value={data.id_line}
                                    handleChange={onHandleChange}
                                    isError={errors.id_line ? true : false}
                                    required
                                    placeholder="kbmti_official"
                                />
                                {errors.id_line && (
                                    <FieldErrorValidation
                                        error={errors.id_line}
                                    />
                                )}
                            </div>
                            <div className="w-1/2">
                                <Label forInput={"no_hp"} className="text-lg">
                                    No HP
                                </Label>
                                <Input
                                    htmlId={"no_hp"}
                                    name={"no_hp"}
                                    value={data.no_hp}
                                    className="w-full"
                                    isError={errors.no_hp ? true : false}
                                    placeholder="089132918939"
                                    required
                                    handleChange={onHandleChange}
                                />
                                {errors.no_hp && (
                                    <FieldErrorValidation
                                        error={errors.no_hp}
                                    />
                                )}
                            </div>
                        </div>
                        <div>
                            <Label forInput={"berkas_link"} className="text-lg">
                                Link Berkas
                            </Label>
                            <Input
                                htmlId={"berkas_link"}
                                name={"berkas_link"}
                                className="w-full"
                                value={data.berkas_link}
                                required
                                isError={errors.berkas_link ? true : false}
                                placeholder="https://drive.google.com/"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button
                                clickHandler={(e) => {
                                    e.preventDefault();
                                    setIsOpen(true);
                                }}
                                type="text"
                                className="flex gap-3"
                            >
                                <FaArrowCircleRight />
                                Daftar
                            </Button>
                        </div>
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog
                                as="div"
                                className="relative z-10"
                                onClose={closeModal}
                            >
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Registrasi Staff Muda
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Sudah siap berproses
                                                        dengan KBMTI?
                                                    </p>
                                                </div>

                                                <div className="mt-12  flex justify-end gap-3">
                                                    <Button
                                                        className="flex gap-3"
                                                        processing={processing}
                                                        type="submit"
                                                        clickHandler={(e) => {
                                                            submit(e);
                                                            closeModal();
                                                        }}
                                                    >
                                                        <FaArrowCircleRight />
                                                        Daftar
                                                    </Button>
                                                    <Button
                                                        className="flex gap-3"
                                                        variant="outline"
                                                        clickHandler={
                                                            closeModal
                                                        }
                                                    >
                                                        <ImCancelCircle />
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </form>
                    <div className="w-full md:w-5/12 flex justify-center order-first md:order-last">
                        <img
                            src={"/img/staffmuda1.webp"}
                            alt="staff muda ilustrasi"
                        />
                    </div>
                </div>
            </div>
        </FrontPageLayout>
    );
}
export default RegisterStaffMuda;
