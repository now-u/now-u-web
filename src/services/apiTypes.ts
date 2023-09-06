export interface paths {
  "/organisations": {
    /** Retrieves all organisations */
    get: {
      /** Retrieves all organisations */
      responses: {
        /** @description organisations found */
        200: {
          content: {
            "application/json": Array<(components["schemas"]["list_organisation"])>;
          };
        };
      };
    };
  };
}


export interface components {
  schemas: {
    organisation: {
      id: number;
      logo: {
        id: number;
        url: string;
        alt_text: string | null;
      };
      extra_links: string[];
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
      /** Format: date-time */
      release_at: string | null;
      /** Format: date-time */
      end_at: string | null;
      enabled: boolean;
      name: string | null;
      description: string | null;
      organisation_type: string | null;
      website_link: string | null;
      email_address: string | null;
      geographic_reach: string | null;
      instagram_link: string | null;
      facebook_link: string | null;
      twitter_link: string | null;
    };
    list_organisation: {
      campaigns: Array<components["schemas"]["campaign"]>;
      id: number;
      logo: {
        id: number;
        url: string;
        alt_text: string | null;
      };
      extra_links: string[];
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
      /** Format: date-time */
      release_at: string | null;
      /** Format: date-time */
      end_at: string | null;
      enabled: boolean;
      name: string | null;
      description: string | null;
      organisation_type: string | null;
      website_link: string | null;
      email_address: string | null;
      geographic_reach: string | null;
      instagram_link: string | null;
      facebook_link: string | null;
      twitter_link: string | null;
    };

    campaign: {
      id: number;
      title: string | null;
      description_app: Record<string, unknown> | null;
      header_image: string | null;
      /** Format: date-time */
      created_at: string;
      /** Format: date-time */
      updated_at: string;
      video_link: string | null;
      description_web: Record<string, unknown> | null;
      enabled: boolean | null;
      /** Format: date-time */
      start_date: string | null;
      /** Format: date-time */
      end_date: string | null;
      short_name: string | null;
      infographic_url: string | null;
      of_the_month: boolean | null;
      recommended: boolean | null;
      status: number | null;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
