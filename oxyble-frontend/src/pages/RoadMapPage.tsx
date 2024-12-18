import './css/RoadMapPage.css';

export default function RoadMapPage() {
  const roadMap = [
    {
      title: 'Mining',
      steps: ['Mining points!', 'Leveling up your account!', 'Get NFT!'],
    },
    {
      title: 'Friends',
      steps: ['Add friends', 'Share them your score', 'Get more points!'],
    },
    {
      title: 'Profile',
      steps: [
        'Customize your profile',
        'Share your profile',
        'Get more friends!',
      ],
    },
  ];
  return (
    <div>
      <h1 className="road-map-header">Road Map</h1>
      {roadMap.map((item, index) => (
        <div className="road-map-card" key={index}>
          <h2 className="road-map-card-header">{item.title}</h2>
          <ul className="road-map-card-list">
            {item.steps.map((step, index) => (
              <li className="road-map-card-list-item" key={index}>
                {`Step ${index + 1}: ${step}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
