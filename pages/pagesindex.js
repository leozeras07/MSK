export default function Dashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>SkinBot Admin</h1>
      <div style={{ backgroundColor: 'white', padding: '1rem', marginTop: '1rem', borderRadius: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Análises Recentes</h2>
        <ul>
          <li style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>Usuário 551199999999 - Picada: Mosquito - Leve</li>
          <li style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>Usuário 558598765432 - Ferida: Inflamada - Grave</li>
        </ul>
      </div>
    </div>
  );
}
