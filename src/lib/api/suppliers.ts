import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export async function addSupplier(data: {
  name: string;
  location: string;
  coordinates: { x: number; y: number };
}) {
  try {
    // Convert the coordinates object to PostgreSQL point format
    const pointString = `(${data.coordinates.x},${data.coordinates.y})`;
    
    const { data: supplier, error } = await supabase
      .from('suppliers')
      .insert([{
        name: data.name,
        location: data.location,
        coordinates: pointString
      }])
      .select()
      .single();

    if (error) throw error;
    return supplier;
  } catch (error) {
    console.error('Error adding supplier:', error);
    toast({
      title: "Error",
      description: "Failed to add supplier. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function updateSupplier(id: string, data: {
  name?: string;
  location?: string;
  coordinates?: { x: number; y: number };
}) {
  try {
    const updates: any = { ...data };
    if (data.coordinates) {
      updates.coordinates = `(${data.coordinates.x},${data.coordinates.y})`;
    }

    const { data: supplier, error } = await supabase
      .from('suppliers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return supplier;
  } catch (error) {
    console.error('Error updating supplier:', error);
    toast({
      title: "Error",
      description: "Failed to update supplier. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function deleteSupplier(id: string) {
  try {
    const { error } = await supabase
      .from('suppliers')
      .delete()
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting supplier:', error);
    toast({
      title: "Error",
      description: "Failed to delete supplier. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function getSuppliers() {
  try {
    const { data, error } = await supabase
      .from('suppliers')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching suppliers:', error);
    toast({
      title: "Error",
      description: "Failed to fetch suppliers. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}