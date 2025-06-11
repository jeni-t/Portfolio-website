const skills = [
  { name: "HTML5", level: 100 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "PHP", level: 50 },
  { name: "Mysql", level: 70 },
  { name: "MongoDB", level: 30 },
  { name: "ReactJS", level: 60 },
  { name: "Nodejs", level: 40 },
  { name: "TailwindCss", level: 60 },
  { name: "C,C++", level: 30 },
  { name: "Java", level: 30 },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 px-8 py-12">
      <h2 className="text-3xl font-bold text-black mb-2">Skills</h2>
      <p className="text-gray-700 mb-8">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-900">{skill.name}</span>
              <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-sky-500 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
