import React, { useState } from "react";

interface Item {
    authorId: number;
    judul: string;
    penerbit: string;
    deskripsi: string;
}

const AddBooksForm: React.FC = () => {
    const [authorId, setAuthorId] = useState<number>();
    const [judul, setJudul] = useState<string>("");
    const [penerbit, setPenerbit] = useState<string>("");
    const [deskripsi, setDeskripsi] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const newItem = {authorId,judul,penerbit,deskripsi };
        

        try {
            const response = await fetch("http://localhost:1225/books/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });

            if (!response.ok) {
                throw new Error("Failed to add item");
            }

            const result: Item = await response.json();
            setSuccess(`Item added successfully: ${result.judul}  ${result.penerbit}  ${result.deskripsi}`);
            setJudul(""); 
            setPenerbit(""); 
            setDeskripsi(""); // Clear the form
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-5">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="w-96 text-left m-auto">
                    <label htmlFor="name">authorId:</label>
                    <input
                        type="number"
                        id="authorId"
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.valueAsNumber)}
                        required
                        className="rounded-lg inline-block w-96 h-9 pl-2 mb-3"
                    />
                     <label htmlFor="name">Judul:</label>
                    <input
                        type="text"
                        id="judul"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}
                        required
                        className="rounded-lg inline-block w-96 h-9 pl-2 mb-3"
                    />
                     <label htmlFor="name">Penerbit:</label>
                    <input
                        type="text"
                        id="penerbit"
                        value={penerbit}
                        onChange={(e) => setPenerbit(e.target.value)}
                        required
                        className="rounded-lg inline-block w-96 h-9 pl-2 mb-3"
                    />
                    <label htmlFor="name">Deskripsi:</label>
                    <input
                        type="text"
                        id="Deskripsi"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                        className="rounded-lg inline-block w-96 h-9 pl-2"
                    />
                </div>
                <button className="bg-blue-600 text-center py-1 px-10 mt-3 rounded-lg hover:bg-blue-700 active:ring-2 active:ring-white" type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Item"}
                </button>
            </form>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>{success}</div>}
        </div>
    );
};

export default AddBooksForm;
