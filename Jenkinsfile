library('pipeline@v10.9.0')

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
  flattening = [
    strategy: "docker_squash",
    from: "eu.gcr.io/neo9-software-factory/n9-images/node:12.18.2-runtime"
  ]
  sonarCommand = "sonar-scanner -Dsonar.typescript.tsconfigPath=tsconfig.sonar.json"
  notifications = [email: 'april@neo9.fr']
}
