{{/* Generate the full name */}}
{{- define "nr-bank-app.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Chart name */}}
{{- define "nr-bank-app.name" -}}
{{- .Chart.Name -}}
{{- end -}}
