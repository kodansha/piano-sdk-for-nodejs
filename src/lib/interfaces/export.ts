export interface Export {
  export_id: string;
  export_name: string;
  export_created: number;
  export_updated?: number;
  export_completed?: number;
  export_percentage: number;
  export_records: number;
  export_status: string;
  report_type: string;
  export_repeatable: boolean;
  filter_data: string;
}
