library('pipeline@v10.8.0')

HelmPipeline {
  repository = "eu.gcr.io/neo9-software-factory/n9-images"
  gitlabConnection = "gitlab"
  k8sConfigID = "xxx-eks"
  chartVersion = "1.28.0"
  chartName = "n9/node-api"
  releaseName = "april-devteam-kpi-web"
  continuousDelivery = [
  ]
  target = "builder"
  flatteningStrategy = "skip_flattening"
  //sonarCommand = "./node_modules/sonar-scanner/bin/sonar-scanner"
  notifications = [email: 'xavier.michel@neo9.fr']
}
