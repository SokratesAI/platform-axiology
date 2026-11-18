import { useEffect, useState } from 'react';
import {
  Assessment,
  clearAll,
  exportJSON,
  getAllAssessments,
  importJSON,
  ImportResult,
  setCurrentColumn,
  setTargetColumn,
  subscribe,
} from '../storage/assessments';

export interface UseAssessmentsResult {
  assessments: Map<string, Assessment>;
  setCurrent: (code: string, col: number | null) => void;
  setTarget: (code: string, col: number | null) => void;
  clear: () => void;
  exportJSON: () => string;
  importJSON: (json: string) => ImportResult;
}

export function useAssessments(): UseAssessmentsResult {
  const [assessments, setAssessments] = useState<Map<string, Assessment>>(() => getAllAssessments());

  useEffect(() => {
    return subscribe(() => setAssessments(getAllAssessments()));
  }, []);

  return {
    assessments,
    setCurrent: setCurrentColumn,
    setTarget: setTargetColumn,
    clear: clearAll,
    exportJSON,
    importJSON,
  };
}
