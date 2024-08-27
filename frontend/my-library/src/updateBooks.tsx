import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Updatebookform: React.FC = () => {
        const [authorId, setAuthorid] = useState<string>("");
        const [judul, setJudul] = useState<string>("");
        const [penerbit, setPenerbit] = useState<string>("");
        const [deskripsi, setDeskripsi] = useState<string>("");
        const [imageUrl, setImage] = useState<string>("");
        const [error, setError] = useState<string | null>(null);
        const [success, setSuccess] = useState<string | null>(null);
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
        const {id} = useParams();

        useEffect(() => {
            setLoading(true);
            axios.get(`http://localhost:1225/books/${id}`)
            .then((Response) => {
                setAuthorid(Response.data.authorId);
                setJudul(Response.data.judul);
                setPenerbit(Response.data.penerbit);
                setDeskripsi(Response.data.deskripsi);
                setImage(Response.data.imageUrl);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert('An error browww');
                console.log(error);
            });
        }, [] )

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            setError(null);
            setSuccess(null);

            const data = { 
                authorId,
                judul,
                penerbit,
                deskripsi,
                imageUrl,
            };
            
            setLoading(true);
            axios.put(`http://localhost:1225/books/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/list');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error browww');
                console.log(error);
            });
        }
        
        return (
            <div className="mt-5">
                <h2>Update data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="w-96 text-left m-auto">
                    <label htmlFor="name">authorId:</label>
                        <input
                            type="number"
                            id="authorId"
                            value={authorId}
                            onChange={(e) => setAuthorid(e.target.value)}
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
                        <label htmlFor="name">Image:</label>
                        <input
                            type="text"
                            id="ImageUrl"
                            value={imageUrl}
                            onChange={(e) => setImage(e.target.value)}
                            required
                            className="rounded-lg inline-block w-96 h-9 pl-2"
                        />
                    </div>
                    <button className="bg-blue-600 text-center py-1 px-10 mt-3 rounded-lg hover:bg-blue-700 active:ring-2 active:ring-white" onClick={handleSubmit}>
                        Save
                    </button>
                </form>
                {error && <div style={{ color: "red" }}>{error}</div>}
                {success && <div style={{ color: "green" }}>{success}</div>}
            </div>
        );
};

export default Updatebookform;
