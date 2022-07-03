import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FromLapor from "../components/Lapor/index";
import { Provider } from "react-redux";
import store from "../redux/store";

test("render from Lapor", () => {
	render(
		<Provider store={store}>
			<FromLapor />
		</Provider>
	);

	const nameLabel = screen.getByText(/Nama Lengkap/i);
	const numberLabel = screen.getByText(/Nomor Handphone/i);
	const decLabel = screen.getByText(/Keterangan Bencana/i);
	const addresLabel = screen.getByText(/Alamat Kejadian Bencana/i);
	const kronoLabel = screen.getByText(/Kronologi Kejadian Bencana/i);

	expect(nameLabel).toBeInTheDocument();
	expect(numberLabel).toBeInTheDocument();
	expect(decLabel).toBeInTheDocument();
	expect(addresLabel).toBeInTheDocument();
	expect(kronoLabel).toBeInTheDocument();

	const inputNama = screen.getByLabelText(/Nomor Handphone/i);
	const input = screen.getByLabelText(/Nomor Handphone/i);
	const inputDescription = screen.getByLabelText(/Nomor Handphone/i);

	userEvent.type(inputNama, "Doni");
	userEvent.type(input, "088888888888");
	userEvent.type(inputDescription, "Gempa Bumi di Indonesia");

	expect(input).toHaveAttribute("type", "text");
});
