export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      alerts: {
        Row: {
          created_at: string | null
          id: string
          is_resolved: boolean | null
          message: string
          severity: string | null
          supplier_id: string | null
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_resolved?: boolean | null
          message: string
          severity?: string | null
          supplier_id?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_resolved?: boolean | null
          message?: string
          severity?: string | null
          supplier_id?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alerts_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_metrics: {
        Row: {
          category: string | null
          created_at: string | null
          dimensions: Json | null
          id: string
          metric_date: string | null
          metric_name: string
          metric_value: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          dimensions?: Json | null
          id?: string
          metric_date?: string | null
          metric_name: string
          metric_value?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          dimensions?: Json | null
          id?: string
          metric_date?: string | null
          metric_name?: string
          metric_value?: number | null
        }
        Relationships: []
      }
      audits: {
        Row: {
          auditor: string | null
          completed_date: string | null
          completion_percentage: number | null
          created_at: string | null
          findings: string | null
          id: string
          scheduled_date: string | null
          status: string | null
          supplier_id: string | null
        }
        Insert: {
          auditor?: string | null
          completed_date?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          findings?: string | null
          id?: string
          scheduled_date?: string | null
          status?: string | null
          supplier_id?: string | null
        }
        Update: {
          auditor?: string | null
          completed_date?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          findings?: string | null
          id?: string
          scheduled_date?: string | null
          status?: string | null
          supplier_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audits_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      carbon_metrics: {
        Row: {
          created_at: string | null
          current_progress: number | null
          id: string
          notes: string | null
          reporting_period: string
          scope1_value: number
          scope2_value: number
          scope3_value: number
          target_reduction: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_progress?: number | null
          id?: string
          notes?: string | null
          reporting_period: string
          scope1_value: number
          scope2_value: number
          scope3_value: number
          target_reduction?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_progress?: number | null
          id?: string
          notes?: string | null
          reporting_period?: string
          scope1_value?: number
          scope2_value?: number
          scope3_value?: number
          target_reduction?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      compliance_checks: {
        Row: {
          created_at: string | null
          findings: Json | null
          id: string
          last_checked_at: string | null
          next_check_date: string | null
          requirement_id: string | null
          status: string | null
          supplier_id: string | null
        }
        Insert: {
          created_at?: string | null
          findings?: Json | null
          id?: string
          last_checked_at?: string | null
          next_check_date?: string | null
          requirement_id?: string | null
          status?: string | null
          supplier_id?: string | null
        }
        Update: {
          created_at?: string | null
          findings?: Json | null
          id?: string
          last_checked_at?: string | null
          next_check_date?: string | null
          requirement_id?: string | null
          status?: string | null
          supplier_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compliance_checks_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "compliance_requirements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compliance_checks_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_requirements: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          required_documents: string[] | null
          title: string
          updated_at: string | null
          verification_frequency: unknown | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          required_documents?: string[] | null
          title: string
          updated_at?: string | null
          verification_frequency?: unknown | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          required_documents?: string[] | null
          title?: string
          updated_at?: string | null
          verification_frequency?: unknown | null
        }
        Relationships: []
      }
      compliance_tracking: {
        Row: {
          attachments: string[] | null
          completion_date: string | null
          created_at: string | null
          due_date: string | null
          id: string
          notes: string | null
          requirement_id: string | null
          status: string | null
          supplier_id: string | null
          updated_at: string | null
        }
        Insert: {
          attachments?: string[] | null
          completion_date?: string | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          notes?: string | null
          requirement_id?: string | null
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
        }
        Update: {
          attachments?: string[] | null
          completion_date?: string | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          notes?: string | null
          requirement_id?: string | null
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compliance_tracking_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "compliance_requirements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compliance_tracking_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      config: {
        Row: {
          created_at: string
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      conservation_programs: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          region: string | null
          species_id: string | null
          start_date: string | null
          status: string | null
          success_metrics: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          region?: string | null
          species_id?: string | null
          start_date?: string | null
          status?: string | null
          success_metrics?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          region?: string | null
          species_id?: string | null
          start_date?: string | null
          status?: string | null
          success_metrics?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conservation_programs_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "species"
            referencedColumns: ["id"]
          },
        ]
      }
      incident_reports: {
        Row: {
          created_at: string | null
          description: string
          evidence_urls: string[] | null
          id: string
          is_anonymous: boolean | null
          location: unknown | null
          report_type: string | null
          resolved_at: string | null
          severity: string | null
          status: string | null
          supplier_id: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          evidence_urls?: string[] | null
          id?: string
          is_anonymous?: boolean | null
          location?: unknown | null
          report_type?: string | null
          resolved_at?: string | null
          severity?: string | null
          status?: string | null
          supplier_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          evidence_urls?: string[] | null
          id?: string
          is_anonymous?: boolean | null
          location?: unknown | null
          report_type?: string | null
          resolved_at?: string | null
          severity?: string | null
          status?: string | null
          supplier_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "incident_reports_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      job_listings: {
        Row: {
          created_at: string | null
          department: string
          description: string
          id: string
          innovation_tags: string[] | null
          is_active: boolean | null
          location: string
          requirements: string[]
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          department: string
          description: string
          id?: string
          innovation_tags?: string[] | null
          is_active?: boolean | null
          location: string
          requirements?: string[]
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string
          description?: string
          id?: string
          innovation_tags?: string[] | null
          is_active?: boolean | null
          location?: string
          requirements?: string[]
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          preferences: Json | null
          role: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          preferences?: Json | null
          role?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          preferences?: Json | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      risk_assessments: {
        Row: {
          ai_recommendations: string | null
          assessment_date: string | null
          created_at: string | null
          factors: Json | null
          id: string
          next_review_date: string | null
          risk_score: number | null
          status: string | null
          supplier_id: string | null
        }
        Insert: {
          ai_recommendations?: string | null
          assessment_date?: string | null
          created_at?: string | null
          factors?: Json | null
          id?: string
          next_review_date?: string | null
          risk_score?: number | null
          status?: string | null
          supplier_id?: string | null
        }
        Update: {
          ai_recommendations?: string | null
          assessment_date?: string | null
          created_at?: string | null
          factors?: Json | null
          id?: string
          next_review_date?: string | null
          risk_score?: number | null
          status?: string | null
          supplier_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "risk_assessments_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      security_logs: {
        Row: {
          created_at: string | null
          description: string
          event_type: string
          id: string
          ip_address: string | null
          metadata: Json | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          event_type: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          event_type?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      species: {
        Row: {
          cites_listing: string | null
          conservation_status: string | null
          created_at: string | null
          description: string | null
          habitat: string[] | null
          id: string
          image_url: string | null
          iucn_status: string | null
          name: string
          population_trend: string | null
          scientific_name: string
          threats: string[] | null
          updated_at: string | null
        }
        Insert: {
          cites_listing?: string | null
          conservation_status?: string | null
          created_at?: string | null
          description?: string | null
          habitat?: string[] | null
          id?: string
          image_url?: string | null
          iucn_status?: string | null
          name: string
          population_trend?: string | null
          scientific_name: string
          threats?: string[] | null
          updated_at?: string | null
        }
        Update: {
          cites_listing?: string | null
          conservation_status?: string | null
          created_at?: string | null
          description?: string | null
          habitat?: string[] | null
          id?: string
          image_url?: string | null
          iucn_status?: string | null
          name?: string
          population_trend?: string | null
          scientific_name?: string
          threats?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      species_regions: {
        Row: {
          last_assessed_date: string | null
          population_count: number | null
          region_name: string
          species_id: string
        }
        Insert: {
          last_assessed_date?: string | null
          population_count?: number | null
          region_name: string
          species_id: string
        }
        Update: {
          last_assessed_date?: string | null
          population_count?: number | null
          region_name?: string
          species_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "species_regions_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "species"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_certifications: {
        Row: {
          certification_name: string
          certification_type: string
          created_at: string | null
          expiry_date: string | null
          id: string
          issue_date: string
          status: string | null
          supplier_id: string | null
          updated_at: string | null
          verification_proof: string | null
        }
        Insert: {
          certification_name: string
          certification_type: string
          created_at?: string | null
          expiry_date?: string | null
          id?: string
          issue_date: string
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
          verification_proof?: string | null
        }
        Update: {
          certification_name?: string
          certification_type?: string
          created_at?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
          verification_proof?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_certifications_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_communications: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          message: string
          message_type: string
          status: string | null
          supplier_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          message: string
          message_type: string
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          message?: string
          message_type?: string
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_communications_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_documents: {
        Row: {
          created_at: string | null
          document_type: string | null
          document_url: string
          expiry_date: string | null
          id: string
          supplier_id: string | null
          updated_at: string | null
          verification_status: string | null
        }
        Insert: {
          created_at?: string | null
          document_type?: string | null
          document_url: string
          expiry_date?: string | null
          id?: string
          supplier_id?: string | null
          updated_at?: string | null
          verification_status?: string | null
        }
        Update: {
          created_at?: string | null
          document_type?: string | null
          document_url?: string
          expiry_date?: string | null
          id?: string
          supplier_id?: string | null
          updated_at?: string | null
          verification_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_documents_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          certification_status: Json | null
          compliance_rate: number | null
          coordinates: unknown
          created_at: string | null
          eco_certifications: Json | null
          id: string
          labor_compliance_status: Json | null
          last_audit_date: string | null
          last_verification_date: string | null
          location: string
          name: string
          risk_factors: Json | null
          risk_level: string | null
          sustainability_goals: Json | null
          sustainability_score: number | null
          updated_at: string | null
        }
        Insert: {
          certification_status?: Json | null
          compliance_rate?: number | null
          coordinates: unknown
          created_at?: string | null
          eco_certifications?: Json | null
          id?: string
          labor_compliance_status?: Json | null
          last_audit_date?: string | null
          last_verification_date?: string | null
          location: string
          name: string
          risk_factors?: Json | null
          risk_level?: string | null
          sustainability_goals?: Json | null
          sustainability_score?: number | null
          updated_at?: string | null
        }
        Update: {
          certification_status?: Json | null
          compliance_rate?: number | null
          coordinates?: unknown
          created_at?: string | null
          eco_certifications?: Json | null
          id?: string
          labor_compliance_status?: Json | null
          last_audit_date?: string | null
          last_verification_date?: string | null
          location?: string
          name?: string
          risk_factors?: Json | null
          risk_level?: string | null
          sustainability_goals?: Json | null
          sustainability_score?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
