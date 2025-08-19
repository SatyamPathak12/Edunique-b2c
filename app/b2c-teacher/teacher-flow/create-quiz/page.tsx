import { CreateTestPage } from '@/components/teacher-b2c/create-test/CreateTestPage';

export default async function CreateQuiz({ searchParams }: { searchParams: Promise<{ step?: string }>; }) {
  const resolvedParams = await searchParams;
  const step = parseInt(resolvedParams?.step || '1');
  const currentTestStep = isNaN(step) ? 1 : step;

  return (
    <div>
      <CreateTestPage testType="Quiz" currentTestStep={currentTestStep} />
    </div>
  );
}