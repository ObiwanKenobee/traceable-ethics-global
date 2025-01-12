import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

// Supplier Management
export async function addSupplier(data: {
  name: string;
  location: string;
  coordinates: { x: number; y: number };
}) {
  try {
    const { data: supplier, error } = await supabase
      .from('suppliers')
      .insert([data])
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

// Risk Zone Management
export async function addRiskZone(data: {
  region: string;
  riskLevel: 'low' | 'medium' | 'high';
  riskFactors: string[];
}) {
  try {
    const { data: riskAssessment, error } = await supabase
      .from('risk_assessments')
      .insert([{
        risk_score: data.riskLevel === 'high' ? 3 : data.riskLevel === 'medium' ? 2 : 1,
        factors: data.riskFactors,
        status: 'active'
      }])
      .select()
      .single();

    if (error) throw error;
    return riskAssessment;
  } catch (error) {
    console.error('Error adding risk zone:', error);
    toast({
      title: "Error",
      description: "Failed to add risk zone. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

// Report Management
export async function createReport(data: {
  title: string;
  type: string;
  content?: any;
}) {
  try {
    const { data: report, error } = await supabase
      .from('analytics_metrics')
      .insert([{
        metric_name: data.title,
        category: data.type,
        dimensions: data.content
      }])
      .select()
      .single();

    if (error) throw error;
    return report;
  } catch (error) {
    console.error('Error creating report:', error);
    toast({
      title: "Error",
      description: "Failed to create report. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

export async function getReports(filters?: {
  category?: string;
  dateRange?: { start: Date; end: Date };
}) {
  try {
    let query = supabase
      .from('analytics_metrics')
      .select('*');

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.dateRange) {
      query = query
        .gte('created_at', filters.dateRange.start.toISOString())
        .lte('created_at', filters.dateRange.end.toISOString());
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    toast({
      title: "Error",
      description: "Failed to fetch reports. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

// Resource Management
export async function addResource(data: {
  title: string;
  type: 'guide' | 'video' | 'case-study';
  description: string;
}) {
  try {
    const { data: resource, error } = await supabase
      .from('compliance_requirements')
      .insert([{
        title: data.title,
        description: data.description,
        category: data.type
      }])
      .select()
      .single();

    if (error) throw error;
    return resource;
  } catch (error) {
    console.error('Error adding resource:', error);
    toast({
      title: "Error",
      description: "Failed to add resource. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

// Collaboration Management
export async function createProject(data: {
  title: string;
  team: string[];
  deadline: string;
}) {
  try {
    const { data: communication, error } = await supabase
      .from('supplier_communications')
      .insert([{
        message_type: 'project',
        message: JSON.stringify({
          title: data.title,
          team: data.team,
          deadline: data.deadline
        }),
        status: 'active'
      }])
      .select()
      .single();

    if (error) throw error;
    return communication;
  } catch (error) {
    console.error('Error creating project:', error);
    toast({
      title: "Error",
      description: "Failed to create project. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

// Settings Management
export async function updateSettings(data: {
  companyName: string;
  email: string;
}) {
  try {
    const { data: config, error } = await supabase
      .from('config')
      .upsert([
        { key: 'company_name', value: data.companyName },
        { key: 'contact_email', value: data.email }
      ])
      .select();

    if (error) throw error;
    return config;
  } catch (error) {
    console.error('Error updating settings:', error);
    toast({
      title: "Error",
      description: "Failed to update settings. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
}

// Assessment Management
export async function startAssessment(supplierId: string) {
  try {
    const { data: assessment, error } = await supabase
      .from('audits')
      .insert([{
        supplier_id: supplierId,
        status: 'in_progress',
        completion_percentage: 0,
        scheduled_date: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return assessment;
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

// Data Upload
export async function uploadData(data: FormData) {
  try {
    const file = data.get('file') as File;
    const { data: upload, error } = await supabase.storage
      .from('supplier-documents')
      .upload(`uploads/${Date.now()}-${file.name}`, file);

    if (error) throw error;

    const { error: docError } = await supabase
      .from('supplier_documents')
      .insert([{
        document_type: 'upload',
        document_url: upload.path,
        verification_status: 'pending'
      }]);

    if (docError) throw docError;

    return upload;
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