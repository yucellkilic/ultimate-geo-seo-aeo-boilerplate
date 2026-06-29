'use client';

const team = [
  {
    name: 'Yücel Kılıç',
    role: 'Founder & Lead Developer',
    image: 'https://via.placeholder.com/300x300?text=Yücel',
    bio: 'Full-stack developer passionate about SEO and performance',
  },
  {
    name: 'Team Member 1',
    role: 'Developer',
    image: 'https://via.placeholder.com/300x300?text=Dev1',
    bio: 'Expert in modern web technologies',
  },
  {
    name: 'Team Member 2',
    role: 'Designer',
    image: 'https://via.placeholder.com/300x300?text=Designer',
    bio: 'Creating beautiful and functional designs',
  },
];

export function TeamSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-blue-400 mb-3">{member.role}</p>
            <p className="text-slate-300 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
