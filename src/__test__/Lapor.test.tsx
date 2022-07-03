import React from "react";
import { render, screen} from "@testing-library/react";
import FromLapor from "../components/Lapor/index";

test("render from Lapor", () => {
    const {getByText, getByLabelText} = render (<FromLapor/>)

    const nameLabel = getByText(/Nama Lengkap/i)
    const numberLabel = getByText(/Nomor Handphone/i)
    const decLabel = getByText(/Keterangan Bencana/i)
    const addresLabel = getByText(/Alamat Kejadian Bencana/i)
    const kronoLabel = getByText(/Kronologi Kejadian Bencana/i)

    expect(nameLabel).toBeInTheDocument()
    expect(numberLabel).toBeInTheDocument()
    expect(decLabel).toBeInTheDocument()
    expect(addresLabel).toBeInTheDocument()
    expect(kronoLabel).toBeInTheDocument()

    const input = getByLabelText (/Nomor Handphone/i);
    expect(input).toHaveAttribute('type','number');
});
