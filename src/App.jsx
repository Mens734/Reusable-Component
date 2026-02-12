import "./App.css";
import Card from "./Card";

export default function App() {
  const cardsData = [
    {
      title: "React Components",
      description:
        "Understand functional and class components and how they structure your UI.",
      buttonText: "Learn Components",
    },
    {
      title: "JSX Syntax",
      description: "Write HTML-like syntax inside JavaScript using JSX.",
      buttonText: "Explore JSX",
    },
    {
      title: "Props in React",
      description:
        "Pass data between components using props for dynamic rendering.",
      buttonText: "Use Props",
    },
    {
      title: "React State",
      description:
        "Manage dynamic data inside components using the useState hook.",
      buttonText: "Manage State",
    },
    {
      title: "useEffect Hook",
      description:
        "Handle side effects like API calls and lifecycle events with useEffect.",
      buttonText: "Learn useEffect",
    },
    {
      title: "React Router",
      description:
        "Enable navigation between different pages in your React application.",
      buttonText: "Setup Routing",
    },
    {
      title: "Event Handling",
      description:
        "Handle user interactions like clicks and form submissions in React.",
      buttonText: "Handle Events",
    },
    {
      title: "Conditional Rendering",
      description: "Render UI elements dynamically based on conditions.",
      buttonText: "Render Conditionally",
    },
    {
      title: "Lists & Keys",
      description:
        "Render multiple components efficiently using arrays and unique keys.",
      buttonText: "Render Lists",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">React</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
