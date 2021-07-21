module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        { type: 'doc', id: 'intro' },
        { type: 'doc', id: 'why_use_ge' }
      ]
    },
    {
      type: 'category',
      label: 'Getting started with Great Expectations',
      items: [
        'tutorials/getting_started/intro',
        'tutorials/getting_started/initialize_a_data_context',
        'tutorials/getting_started/connect_to_data',
        'tutorials/getting_started/create_your_first_expectations',
        'tutorials/getting_started/check_out_data_docs',
        'tutorials/getting_started/validate_your_data',
        'tutorials/getting_started/customize_your_deployment'
      ]
    },
    {
      type: 'category',
      label: 'How to Guides',
      items: [
        {
          type: 'category',
          label: '⚙️ Setting up Great Expectations',
          items: [
            'guides/setup/how_to_instantiate_a_data_context',

            {
              type: 'category',
              label: '🧰 Installation',
              items: [
                'guides/setup/installation/local',
                'guides/setup/installation/databricks',
                'guides/setup/installation/spark_emr'
              ]
            },
            {
              type: 'category',
              label: 'Configuring Data Contexts',
              items: [
                'guides/setup/configuring_data_contexts/how_to_create_a_new_data_context_with_the_cli',
                'guides/setup/configuring_data_contexts/how_to_configure_datacontext_components_using_test_yaml_config',
                'guides/setup/configuring_data_contexts/how_to_configure_credentials_using_a_yaml_file_or_environment_variables',
                'guides/setup/configuring_data_contexts/how_to_configure_credentials_using_a_secrets_store',
                'guides/setup/configuring_data_contexts/how_to_instantiate_a_data_context_without_a_yml_file'
              ]
            },
            {
              type: 'category',
              label: 'Configuring metadata Stores',
              items: [
                'guides/setup/configuring_metadata_stores/how_to_configure_an_expectation_store_in_amazon_s3',
                'guides/setup/configuring_metadata_stores/how_to_configure_an_expectation_store_in_azure_blob_storage',
                'guides/setup/configuring_metadata_stores/how_to_configure_an_expectation_store_in_gcs',
                'guides/setup/configuring_metadata_stores/how_to_configure_an_expectation_store_on_a_filesystem',
                'guides/setup/configuring_metadata_stores/how_to_configure_an_expectation_store_to_postgresql',
                'guides/setup/configuring_metadata_stores/how_to_configure_a_validation_result_store_in_amazon_s3',
                'guides/setup/configuring_metadata_stores/how_to_configure_a_validation_result_store_in_azure_blob_storage',
                'guides/setup/configuring_metadata_stores/how_to_configure_a_validation_result_store_in_gcs',
                'guides/setup/configuring_metadata_stores/how_to_configure_a_validation_result_store_on_a_filesystem',
                'guides/setup/configuring_metadata_stores/how_to_configure_a_validation_result_store_to_postgresql',
                'guides/setup/configuring_metadata_stores/how_to_configure_a_metricsstore'
              ]
            },
            {
              type: 'category',
              label: 'Configuring Data Docs',
              items: [
                'guides/setup/configuring_data_docs/how_to_host_and_share_data_docs_on_a_filesystem',
                'guides/setup/configuring_data_docs/how_to_host_and_share_data_docs_on_azure_blob_storage',
                'guides/setup/configuring_data_docs/how_to_host_and_share_data_docs_on_gcs',
                'guides/setup/configuring_data_docs/how_to_host_and_share_data_docs_on_amazon_s3'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '🔌 Connecting to your data',
          items: [
            'guides/connecting_to_your_data/how_to_configure_a_dataconnector_to_introspect_and_partition_a_file_system_or_blob_store',
            'guides/connecting_to_your_data/how_to_configure_a_dataconnector_to_introspect_and_partition_tables_in_sql',
            'guides/connecting_to_your_data/how_to_create_a_batch_of_data_from_an_in_memory_spark_or_pandas_dataframe',
            'guides/connecting_to_your_data/how_to_create_a_new_expectation_suite_using_the_cli',
            'guides/connecting_to_your_data/how_to_get_a_batch_of_data_from_a_configured_datasource',
            {
              type: 'category',
              label: '💭 In_memory',
              items: [
                'guides/connecting_to_your_data/in_memory/pandas',
                'guides/connecting_to_your_data/in_memory/spark'
              ]
            },
            {
              type: 'category',
              label: '🚀 Database',
              items: [
                'guides/connecting_to_your_data/database/athena',
                'guides/connecting_to_your_data/database/bigquery',
                'guides/connecting_to_your_data/database/mssql',
                'guides/connecting_to_your_data/database/mysql',
                'guides/connecting_to_your_data/database/postgres',
                'guides/connecting_to_your_data/database/redshift',
                'guides/connecting_to_your_data/database/snowflake',
                'guides/connecting_to_your_data/database/sqlite'
              ]
            },
            {
              type: 'category',
              label: '📁 Filesystem',
              items: [
                'guides/connecting_to_your_data/filesystem/pandas',
                'guides/connecting_to_your_data/filesystem/spark'
              ]
            },
            {
              type: 'category',
              label: '☁️ Cloud',
              items: [
                'guides/connecting_to_your_data/cloud/s3/pandas',
                'guides/connecting_to_your_data/cloud/s3/spark',
                'guides/connecting_to_your_data/cloud/gcs/pandas',
                'guides/connecting_to_your_data/cloud/gcs/spark',
                'guides/connecting_to_your_data/cloud/azure/pandas',
                'guides/connecting_to_your_data/cloud/azure/spark'
              ]
            },
            {
              type: 'category',
              label: 'Contributing',
              items: [
                'guides/connecting_to_your_data/contributing/how_to_add_support_for_a_new_sqlalchemy_dialect'
              ]
            },
            {
              type: 'category',
              label: '🔬 Advanced',
              items: [
                'guides/connecting_to_your_data/advanced/database_credentials',
                'guides/connecting_to_your_data/advanced/how_to_create_a_batch_from_a_sql_query',
                'guides/connecting_to_your_data/advanced/how_to_create_a_lightweight_data_catalog_by_applying_a_descriptive_profiler_to_a_configured_datasource',
                'guides/connecting_to_your_data/advanced/how_to_explore_changes_in_data_over_time_using_a_configured_datasource'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '🧪 Creating and editing Expectations for your data',
          items: [
            'guides/expectations/how_to_create_and_edit_expectations_based_on_domain_knowledge_without_inspecting_data_directly',
            'guides/expectations/how_to_create_and_edit_expectations_in_bulk',
            'guides/expectations/how_to_create_and_edit_expectations_with_a_profiler',
            'guides/expectations/how_to_create_and_edit_expectations_with_instant_feedback_from_a_sample_batch_of_data',
            {
              type: 'category',
              label: '🔬 Advanced',
              items: [
                'guides/expectations/advanced/how_to_add_comments_to_expectations_and_display_them_in_data_docs',
                'guides/expectations/advanced/how_to_create_renderers_for_custom_expectations',
                'guides/expectations/advanced/how_to_create_a_new_expectation_suite_by_profiling_from_a_jsonschema_file',
                'guides/expectations/advanced/how_to_create_expectations_that_span_multiple_batches_using_evaluation_parameters',
                'guides/expectations/advanced/how_to_dynamically_load_evaluation_parameters_from_a_database',
                'guides/expectations/advanced/how_to_create_a_new_expectation_suite_using_rule_based_profilers'
              ]
            },
            {
              type: 'category',
              label: 'Configuring Profilers',
              items: []
            },
            {
              type: 'category',
              label: 'Contributing',
              items: [
                'guides/expectations/contributing/how_to_contribute_a_new_expectation_to_great_expectations'
              ]
            },
            {
              type: 'category',
              label: 'Creating Custom Expectations',
              items: [
                'guides/expectations/creating_custom_expectations/how_to_create_custom_expectations',
                'guides/expectations/creating_custom_expectations/how_to_create_custom_expectations_from_a_sql_query',
                'guides/expectations/creating_custom_expectations/how_to_create_custom_parameterized_expectations'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '✅ Validating your data',
          items: [
            'guides/validation/how_to_validate_data_by_running_a_checkpoint',
            {
              type: 'category',
              label: 'Advanced',
              items: [
                'guides/validation/advanced/how_to_deploy_a_scheduled_checkpoint_with_cron',
                'guides/validation/advanced/how_to_implement_custom_notifications',
                'guides/validation/advanced/how_to_validate_data_without_a_checkpoint'
              ]
            },
            {
              type: 'category',
              label: 'Checkpoints',
              items: [
                'guides/validation/checkpoints/how_to_add_validations_data_or_suites_to_a_checkpoint',
                'guides/validation/checkpoints/how_to_create_a_new_checkpoint',
                'guides/validation/checkpoints/how_to_configure_a_new_checkpoint_using_test_yaml_config'
              ]
            },
            {
              type: 'category',
              label: 'Contributing',
              items: [
                'guides/validation/contributing/how_to_contribute_a_new_validation_action'
              ]
            },
            {
              type: 'category',
              label: 'Validation Actions',
              items: [
                'guides/validation/validation_actions/how_to_store_validation_results_as_a_validation_action',
                'guides/validation/validation_actions/how_to_trigger_email_as_a_validation_action',
                'guides/validation/validation_actions/how_to_trigger_opsgenie_notifications_as_a_validation_action',
                'guides/validation/validation_actions/how_to_trigger_slack_notifications_as_a_validation_action',
                'guides/validation/validation_actions/how_to_update_data_docs_as_a_validation_action'
              ]
            },
            'guides/validation/how_to_validate_data_without_a_checkpoint'
          ]
        },
        {
          type: 'category',
          label: '🧰 Miscellaneous',
          items: [
            { type: 'doc', id: 'guides/miscellaneous/how_to_use_the_project_check_config_command' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_use_the_great_expectations_cli' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_quickly_explore_expectations_in_a_notebook' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_configure_notebooks_generated_by_suite_edit' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_add_comments_to_a_page_on_docs.greatexpectations.io' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_use_the_great_expectation_docker_images' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_write_a_how_to_guide' },
            { type: 'doc', id: 'guides/miscellaneous/how_to_template' }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Deployment Patterns',
      items: [
        'deployment_patterns/how_to_instantiate_a_data_context_hosted_environments',
        'deployment_patterns/how_to_instantiate_a_data_context_on_an_emr_spark_cluster',
        'deployment_patterns/how_to_instantiate_a_data_context_on_databricks_spark_cluster',
        'deployment_patterns/how_to_run_a_checkpoint_in_airflow',
        {
          type: 'category',
          label: 'Contributing',
          items: [
            'deployment_patterns/contributing/how_to_add_a_new_deployment_pattern_document',
            'deployment_patterns/contributing/how_to_contribute_to_an_existing_deployment_pattern_document'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Glossary of Expectations',
          items: [
            { type: 'doc', id: 'reference/glossary_of_expectations' }
          ]
        },
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            { type: 'doc', id: 'reference/core_concepts' },
            { type: 'doc', id: 'reference/checkpoints_and_actions' },
            { type: 'doc', id: 'reference/data_context' },
            { type: 'doc', id: 'reference/data_discovery' },
            { type: 'doc', id: 'reference/data_docs' },
            { type: 'doc', id: 'reference/datasources' },
            { type: 'doc', id: 'reference/evaluation_parameters' },
            { type: 'doc', id: 'reference/execution_engine' },
            {
              type: 'category',
              label: 'Expectations',
              collapsed: true,
              items: [
                { type: 'doc', id: 'reference/expectations/conditional_expectations' },
                { type: 'doc', id: 'reference/expectations/distributional_expectations' },
                { type: 'doc', id: 'reference/expectations/expectations' },
                { type: 'doc', id: 'reference/expectations/implemented_expectations' },
                { type: 'doc', id: 'reference/expectation_suite_operations' }
              ]
            },
            { type: 'doc', id: 'reference/metrics' },
            { type: 'doc', id: 'reference/profilers' },
            { type: 'doc', id: 'reference/expectations/result_format' },
            { type: 'doc', id: 'reference/expectations/standard_arguments' },
            { type: 'doc', id: 'reference/stores' },
            { type: 'doc', id: 'reference/dividing_data_assets_into_batches' },
            { type: 'doc', id: 'reference/validation' }
          ]
        },
        {
          type: 'category',
          label: 'Supporting Resources',
          items: [
            { type: 'doc', id: 'reference/supporting_resources' }
          ]
        },
        {
          type: 'category',
          label: 'Spare Parts',
          collapsed: true,
          items: [
            { type: 'doc', id: 'reference/spare_parts' }
          ]
        },
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            { type: 'doc', id: 'reference/api_reference' }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Community Resources',
      collapsed: true,
      items: [
        { type: 'doc', id: 'community' }
      ]
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: true,
      items: [
        { type: 'doc', id: 'contributing/contributing' },
        { type: 'doc', id: 'contributing/contributing_setup' },
        { type: 'doc', id: 'contributing/contributing_checklist' },
        { type: 'doc', id: 'contributing/contributing_github' },
        { type: 'doc', id: 'contributing/contributing_test' },
        { type: 'doc', id: 'contributing/contributing_maturity' },
        { type: 'doc', id: 'contributing/contributing_style' },
        { type: 'doc', id: 'contributing/contributing_misc' }
      ]
    },
    {
      type: 'category',
      label: 'Changelog',
      collapsed: true,
      items: [
        { type: 'doc', id: 'changelog' }
      ]
    }
  ]
}
