import FrontPageLayout from "@/Layouts/FrontPageLayout";
import React from "react";

function StaffMudaAll(props) {
    return (
        <FrontPageLayout>
            <div className="container mx-auto">
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>No Hp</th>
                        <th>ID Line</th>
                        <th>Link Berkas</th>
                        <th>Waktu Input</th>
                    </tr>
                    {props.staffs.map(staff => (
                        <tr>
                            <td>{staff.name}</td>
                            <td>{staff.nim}</td>
                            <td>{staff.no_hp}</td>
                            <td>{staff.id_line}</td>
                            <td>
                                <a href={staff.berkas_link}>{staff.berkas_link}</a>
                            </td>
                            <td>{staff.created_at}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </FrontPageLayout>
    );
}

export default StaffMudaAll;
