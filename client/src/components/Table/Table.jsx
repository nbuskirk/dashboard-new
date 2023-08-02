const Table = ({ data, status }) => (
  <div>
    {!data && <p>{status}</p>}
    {data && (
      <table style={{ border: '1px solid black', width: '100%' }}>
        <tbody>
          <tr style={{ backgroundColor: '#ccc' }}>
            <th>Service</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Type</th>
            <th>Engine</th>
          </tr>
          {data.map((alert, index) => (
            <tr key={index}>
              <td>{alert.service}</td>
              <td>{alert.severity}</td>
              <td>{alert.status}</td>
              <td>{alert.type}</td>
              <td>{alert.engine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default Table;
