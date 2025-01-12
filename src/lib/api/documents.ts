import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export async function uploadData(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    const { data, error } = await supabase
      .storage
      .from('supplier-documents')
      .upload(`documents/${file.name}`, file);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error uploading data:', error);
    toast({
      title: "Error",
      description: "Failed to upload data. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function getDocuments() {
  try {
    const { data, error } = await supabase
      .from('supplier_documents')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    toast({
      title: "Error",
      description: "Failed to fetch documents. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}