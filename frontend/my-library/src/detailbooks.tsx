import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Detailbooks: React.FC = () => {
        const [authorId, setAuthorid] = useState<string>("");
        const [judul, setJudul] = useState<string>("");
        const [penerbit, setPenerbit] = useState<string>("");
        const [deskripsi, setDeskripsi] = useState<string>("");
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
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert('An error browww');
                console.log(error);
            });
        }, [] )
        
        return (
            <div className="mt-5">
                <h2>Detail data</h2>
                <form>
                    <div className="w-96 text-left m-auto">
                    <label htmlFor="name">authorId:</label>
                        <input
                            type="number"
                            id="authorId"
                            value={authorId}
                            onChange={(e) => setAuthorid(e.target.value)}
                            required
                            className="rounded-lg inline-block w-96 h-9 pl-2 mb-3 bg-bg-primary"
                        />
                        <label htmlFor="name">Judul:</label>
                        <input
                            type="text"
                            id="judul"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            required
                            className="rounded-lg inline-block w-96 h-9 pl-2 mb-3 bg-bg-primary"
                        />
                        <label htmlFor="name">Penerbit:</label>
                        <input
                            type="text"
                            id="penerbit"
                            value={penerbit}
                            onChange={(e) => setPenerbit(e.target.value)}
                            required
                            className="rounded-lg inline-block w-96 h-9 pl-2 mb-3 bg-bg-primary"
                        />
                        <label htmlFor="name">Deskripsi:</label>
                        <input
                            type="text"
                            id="Deskripsi"
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            required
                            className="rounded-lg inline-block w-96 h-9 pl-2 bg-bg-primary"
                        />
                    </div>
                   
                </form>
                {error && <div style={{ color: "red" }}>{error}</div>}
                {success && <div style={{ color: "green" }}>{success}</div>}
            </div>
        );
};

export default Detailbooks;
