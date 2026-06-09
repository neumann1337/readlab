let n = 0
const id = () => `seed-${Date.now()}-${n++}`
const day = 1000 * 60 * 60 * 24

const book = (title, author, tag, priority, due = '', age = 0) => ({
  id: id(),
  title,
  author,
  tag,
  priority,
  due,
  status: 'queue',
  createdAt: Date.now() - age * day,
})

export const seedMaterials = [
  book('Basic Economics', 'Thomas Sowell', 'ekonomia', 'high', '', 1),
  book('Wealth, Poverty and Politics', 'Thomas Sowell', 'ekonomia', 'medium', '', 2),
  book('The Black Swan', 'Nassim Nicholas Taleb', 'ekonomia', 'high', '', 3),
  book('Antifragile', 'Nassim Nicholas Taleb', 'ekonomia', 'high', '2026-06-20', 4),
  book('Skin in the Game', 'Nassim Nicholas Taleb', 'ekonomia', 'medium', '', 5),
  book('The 48 Laws of Power', 'Robert Greene', 'psychologia', 'high', '', 6),
  book('The Laws of Human Nature', 'Robert Greene', 'psychologia', 'high', '', 7),
  book('Mastery', 'Robert Greene', 'self-dev', 'medium', '', 8),
  book('Zapiski z podziemia', 'Fiodor Dostojewski', 'literatura', 'low', '', 9),
  book('The Almanack of Naval Ravikant', 'Eric Jorgenson', 'self-dev', 'medium', '', 10),
  book('Błękitna kropka', 'Carl Sagan', 'nauka', 'low', '', 11),
  book('Die with Zero', 'Bill Perkins', 'biznes', 'low', '', 12),
  book('The Millionaire Next Door', 'Thomas J. Stanley', 'biznes', 'low', '', 13),
  book('Think and Grow Rich', 'Napoleon Hill', 'biznes', 'medium', '', 14),
  book('The Magic of Thinking Big', 'David J. Schwartz', 'self-dev', 'low', '', 15),
  book('The Science of Getting Rich', 'Wallace D. Wattles', 'biznes', '', '', 16),
]
