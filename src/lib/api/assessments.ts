import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export async function startAssessment(supplierId: string) {
  try {
    const { data, error } = await supabase
      .from('risk_assessments')
      .insert([{
        supplier_id: supplierId,
        status: 'in_progress',
        assessment_date: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error starting assessment:', error);
    toast({
      title: "Error",
      description: "Failed to start assessment. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function getAssessments() {
  try {
    const { data, error } = await supabase
      .from('risk_assessments')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching assessments:', error);
    toast({
      title: "Error",
      description: "Failed to fetch assessments. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}