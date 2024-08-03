import React from "react";
import axios from "axios";
import { useState} from "react";
import { useNavigate, useParams, Link} from "react-router-dom";

const Deletebooks: React.FC = () => {
    const [books, setbooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = async (e: React.FormEvent) => {
        
        setLoading(true);
        axios.delete(`http://localhost:1225/books/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/');
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
            <h1>Apakah anda yakin ingin menghapus data ini ?</h1>
            <form onSubmit={handleSubmit}>
                <button className="bg-blue-600 text-center py-1 px-10 mt-3 rounded-lg hover:bg-blue-700 active:ring-2 active:ring-white" onClick={handleSubmit}>
                    Delete
                </button>
                <Link className="bg-red-600 text-center py-2 px-12 mt-3 rounded-lg hover:bg-red-700 active:ring-2 active:ring-white" to={"/"}>Back</Link>
            </form>
        </div>
    );
};

export default Deletebooks;
