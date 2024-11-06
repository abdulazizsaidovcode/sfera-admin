const SidebarStudent = () => {
    return (
        <div className="bg-white p-6 w-1/4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Arab tili 10</h2>
            <p className="mt-2">ARAB TILI • Abdullah Tutor</p>
            <p className="text-gray-500">Narx: <strong>200 000 UZS</strong></p>
            <p className="text-gray-500">Vaqt: Juft kunlar • 14:00</p>
            <p className="text-gray-500">Xonalar: N1</p>
            <p className="text-gray-500">Mashg'ulotlar sanalari: 01.08.2022 – 31.08.2023</p>

            <ul className="mt-4 space-y-2">
                {['Akobir Quronov', 'Муниса Рахматова', 'Niso Khamraeva'].map((name, index) => (
                    <li key={index} className="flex items-center justify-between text-gray-800">
            <span className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${index % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                {name}
            </span>
                        <span className="text-sm text-gray-500">({Math.floor(Math.random() * 1000)})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarStudent;
