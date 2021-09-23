const DetailMaps = ({ name, marca, capacidade, type, color, status }) => {
  const cor = color ? `bg-${color}-500` : "";
  return (
    <div
      className={`table-auto rounded-lg p-1 border-4 border-double border-blue-600 z-50 w-1/4`}
    >
      <table className={`w-full bg-white  rounded-xl`}>
        <thead className="bg-black">
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-4">Nome</td>
            <td>{name || "Indefinido"}</td>
          </tr>
          <tr className="bg-blue-200">
            <td className="pl-4">Marca</td>
            <td>{marca || "indefinida"}</td>
          </tr>
          <tr>
            <td className="pl-4">Capacidade</td>
            <td>{capacidade || 0}</td>
          </tr>
          <tr className="bg-blue-200">
            <td className="pl-4">Tipo</td>
            <td>{type || "Padrão"}</td>
          </tr>
          <tr>
            <td className="pl-4">Status</td>
            <td>{status || "Indefinido"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailMaps;
