export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  origin: { name: string };
  image: string;
}