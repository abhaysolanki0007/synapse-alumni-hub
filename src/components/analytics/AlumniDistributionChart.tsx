import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const alumniData = [
  { name: 'Accenture', value: 120, color: 'hsl(214, 84%, 56%)' },
  { name: 'TCS', value: 100, color: 'hsl(160, 84%, 39%)' },
  { name: 'Infosys', value: 90, color: 'hsl(262, 83%, 58%)' },
  { name: 'Razorpay', value: 50, color: 'hsl(48, 96%, 53%)' },
  { name: 'PayPal', value: 30, color: 'hsl(142, 76%, 36%)' },
  { name: 'Microsoft', value: 45, color: 'hsl(38, 92%, 50%)' },
  { name: 'Amazon', value: 65, color: 'hsl(220, 14%, 96%)' },
  { name: 'Google', value: 40, color: 'hsl(215, 28%, 17%)' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-elevated">
        <p className="font-medium text-foreground">{data.name}</p>
        <p className="text-primary">
          Alumni: <span className="font-semibold">{data.value}</span>
        </p>
        <p className="text-muted-foreground text-sm">
          {((data.value / alumniData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

export function AlumniDistributionChart() {
  const totalAlumni = alumniData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full h-full">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Alumni Distribution by Company
        </h3>
        <p className="text-muted-foreground">
          Total Alumni Tracked: <span className="font-medium text-primary">{totalAlumni}</span>
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={alumniData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }: any) => {
              const total = alumniData.reduce((sum, item) => sum + item.value, 0);
              const percent = ((value / total) * 100).toFixed(0);
              return `${name} (${percent}%)`;
            }}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            stroke="hsl(var(--background))"
            strokeWidth={2}
          >
            {alumniData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}