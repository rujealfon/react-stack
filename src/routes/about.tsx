import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: App,
});

function App() {
  return <div className="text-center">this isa about page</div>;
}
