---
title: ✳ How to create and edit Expectations in bulk
---

import Prerequisites from '../../guides/connecting_to_your_data/components/prerequisites.jsx'

The `JsonSchemaProfiler` helps you quickly create [Expectation Suites](/docs/reference/expectation_suite_operations) from jsonschema files.

<Prerequisites>

* Have a valid jsonschema file that has top level object of type object.

</Prerequisites>

:::warning

This implementation does not traverse any levels of nesting.
:::

### Steps

#### 1.Set a filename and a suite name

````python
jsonschema_file = "YOUR_JSON_SCHEMA_FILE.json"
suite_name = "YOUR_SUITE_NAME"
````

#### 2. Load a DataContext

````python
context = ge.data_context.DataContext()
````

#### 3. Load the jsonschema file

````python
with open(jsonschema_file, "r") as f:
    schema = json.load(f)
````

#### 4. Instantiate the profiler

````python
profiler = JsonSchemaProfiler()
````

#### 5. Create the suite

````python
suite = profiler.profile(schema, suite_name)
````
#### 6. Save the suite

````python
context.save_expectation_suite(suite)
````

#### 7. Optionally, generate Data Docs and review the results there.

Data Docs provides a concise and useful way to review the Expectation Suite that has been created.

````console
context.build_data_docs()

You can also review and update the Expectations created by the profiler to get to the Expectation Suite you want using ``great_expectations suite edit``.
````

### Additional notes

:::important

Note that JsonSchemaProfiler generates Expectation Suites using column map expectations, which assumes a tabular data structure, because Great Expectations does not currently support nested data structures.
:::

The full example script is here:

````python
import json
import great_expectations as ge
from great_expectations.profile.json_schema_profiler import JsonSchemaProfiler

jsonschema_file = "YOUR_JSON_SCHEMA_FILE.json"
suite_name = "YOUR_SUITE_NAME"

context = ge.data_context.DataContext()

with open(jsonschema_file, "r") as f:
    raw_json = f.read()
    schema = json.loads(raw_json)

print("Generating suite...")
profiler = JsonSchemaProfiler()
suite = profiler.profile(schema, suite_name)
context.save_expectation_suite(suite)
````

