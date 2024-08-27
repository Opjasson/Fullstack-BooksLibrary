import React, { useState } from "react";

interface Item {
    id: number;
    name: string;
}

const AddItemForm: React.FC = () => {
    const [id, setID] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const newItem = { name };

        try {
            const response = await fetch("http://localhost:1225/authors/create", {
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
            setSuccess(`Item added successfully: ${result.name}`);
            setName(""); // Clear the form
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
                    <label htmlFor="name">Id:</label>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                        required
                        className="rounded-lg inline-block w-96 h-9 pl-2 mb-3"
                    />
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

export default AddItemForm;
