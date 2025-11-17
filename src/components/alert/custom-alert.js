export default function CustomAlert({ message, type = "info" }) {
    let bgColor = "bg-blue-600"; 
    if (type === "success") bgColor = "bg-green-600";
    if (type === "error") bgColor = "bg-red-600";

    return (
        <div className={`px-4 py-3 rounded-xl ${bgColor} text-white shadow-lg text-sm`}>
            {message}
        </div>
    );
}
