export interface Resource {
  rid: string;
  aid: string;
  deleted: boolean;
  disabled: boolean;
  create_date: number;
  update_date: number;
  publish_date: number;
  name: string;
  description: string;
  image_url: string | null;
  type: string;
  type_label: string;
  purchase_url: string | null;
  resource_url: string | null;
  external_id: string | null;
  is_fbia_resource: boolean;
  bundle_type: string;
  bundle_type_label: string;
}
