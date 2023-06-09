// Author: Chandan BN (c) 2021
//   (2) creates a bundled schema

var rp = require('json-schema-ref-parser');
var fs = require('fs');
async function schemaBundle() {
        var cveSchemaBundle = await rp.bundle(process.argv[2]);
        var metricProperties = cveSchemaBundle.definitions.metrics.items.properties;
        delete metricProperties.cvssV3_1.id;
        delete metricProperties.cvssV3_0.id;
        delete metricProperties.cvssV2_0.id;
        delete metricProperties.cvssV3_1.license;
        delete metricProperties.cvssV3_0.license;
        delete metricProperties.cvssV2_0.license;
        console.log(JSON.stringify(cveSchemaBundle, null, 2));
}

schemaBundle();