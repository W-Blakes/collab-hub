const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    console.log(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        <div>
          {filterList.map((f) => (
            <button
              onClick={() => handleClick(f)}
              className={currentFilter === f ? 'active' : ''}
              key={f}
            >
              {f}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
