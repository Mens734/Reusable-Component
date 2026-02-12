

export default function Card({ title, description, buttonText }) {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white flex flex-col gap-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-auto self-start px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
  );
}


