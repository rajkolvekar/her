import StarBackground from './components/StarBackground';
import Moon from './components/Moon';
import Opening from './sections/Opening';
import Journey from './sections/Journey';
import NightMemories from './sections/NightMemories';
import ThingsAboutHer from './sections/ThingsAboutHer';
import MemoryWall from './sections/MemoryWall';
import HerEyes from './sections/HerEyes';
import Calm from './sections/Calm';
import FinalLette from './sections/FinalLette';
import useLenis from './hooks/useLenis';
import ScrollProgress from './components/ScrollProgress';
import MusicToggle from './components/MusicToggle'; // 👈 add this

export default function App() {
  useLenis();
  return (
    <>
      <ScrollProgress />
      <MusicToggle />
      <StarBackground />
      <Moon />
      <Opening />
      <Journey />
      <NightMemories />
      <ThingsAboutHer />
      <MemoryWall />
      <HerEyes />
      <Calm />
      <FinalLette />
    </>
  );
}
