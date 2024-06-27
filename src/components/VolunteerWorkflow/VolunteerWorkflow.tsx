import "./VolunteerWorkflow.css";

interface Props {
  wrappingClassName: string;
}

export default function VolunteerWorkflow({ wrappingClassName }: Props) {
  return (
    <div className={wrappingClassName}>
      <div className="volunteer-workflow-img-container">
        <div className="volunteer-workflow-img-wrapper">
          <img src="/images/volunteer-workflow.jpg" alt="volunteer-workflow" />
        </div>
      </div>
    </div>
  );
}
