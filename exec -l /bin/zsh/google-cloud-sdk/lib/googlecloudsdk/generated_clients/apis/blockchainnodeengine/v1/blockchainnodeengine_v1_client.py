"""Generated client library for blockchainnodeengine version v1."""
# NOTE: This file is autogenerated and should not be edited by hand.

from __future__ import absolute_import

from apitools.base.py import base_api
from googlecloudsdk.generated_clients.apis.blockchainnodeengine.v1 import blockchainnodeengine_v1_messages as messages


class BlockchainnodeengineV1(base_api.BaseApiClient):
  """Generated client library for service blockchainnodeengine version v1."""

  MESSAGES_MODULE = messages
  BASE_URL = 'https://blockchainnodeengine.googleapis.com/'
  MTLS_BASE_URL = 'https://blockchainnodeengine.mtls.googleapis.com/'

  _PACKAGE = 'blockchainnodeengine'
  _SCOPES = ['https://www.googleapis.com/auth/cloud-platform']
  _VERSION = 'v1'
  _CLIENT_ID = 'CLIENT_ID'
  _CLIENT_SECRET = 'CLIENT_SECRET'
  _USER_AGENT = 'google-cloud-sdk'
  _CLIENT_CLASS_NAME = 'BlockchainnodeengineV1'
  _URL_VERSION = 'v1'
  _API_KEY = None

  def __init__(self, url='', credentials=None,
               get_credentials=True, http=None, model=None,
               log_request=False, log_response=False,
               credentials_args=None, default_global_params=None,
               additional_http_headers=None, response_encoding=None):
    """Create a new blockchainnodeengine handle."""
    url = url or self.BASE_URL
    super(BlockchainnodeengineV1, self).__init__(
        url, credentials=credentials,
        get_credentials=get_credentials, http=http, model=model,
        log_request=log_request, log_response=log_response,
        credentials_args=credentials_args,
        default_global_params=default_global_params,
        additional_http_headers=additional_http_headers,
        response_encoding=response_encoding)
    self.projects_locations_blockchainNodes = self.ProjectsLocationsBlockchainNodesService(self)
    self.projects_locations_operations = self.ProjectsLocationsOperationsService(self)
    self.projects_locations = self.ProjectsLocationsService(self)
    self.projects = self.ProjectsService(self)

  class ProjectsLocationsBlockchainNodesService(base_api.BaseApiService):
    """Service class for the projects_locations_blockchainNodes resource."""

    _NAME = 'projects_locations_blockchainNodes'

    def __init__(self, client):
      super(BlockchainnodeengineV1.ProjectsLocationsBlockchainNodesService, self).__init__(client)
      self._upload_configs = {
          }

    def Create(self, request, global_params=None):
      r"""Creates a new blockchain node in a given project and location.

      Args:
        request: (BlockchainnodeengineProjectsLocationsBlockchainNodesCreateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Create')
      return self._RunMethod(
          config, request, global_params=global_params)

    Create.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/blockchainNodes',
        http_method='POST',
        method_id='blockchainnodeengine.projects.locations.blockchainNodes.create',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['blockchainNodeId', 'requestId'],
        relative_path='v1/{+parent}/blockchainNodes',
        request_field='blockchainNode',
        request_type_name='BlockchainnodeengineProjectsLocationsBlockchainNodesCreateRequest',
        response_type_name='Operation',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes a single blockchain node.

      Args:
        request: (BlockchainnodeengineProjectsLocationsBlockchainNodesDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/blockchainNodes/{blockchainNodesId}',
        http_method='DELETE',
        method_id='blockchainnodeengine.projects.locations.blockchainNodes.delete',
        ordered_params=['name'],
        path_params=['name'],
        query_params=['requestId'],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsBlockchainNodesDeleteRequest',
        response_type_name='Operation',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets details of a single blockchain node.

      Args:
        request: (BlockchainnodeengineProjectsLocationsBlockchainNodesGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (BlockchainNode) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/blockchainNodes/{blockchainNodesId}',
        http_method='GET',
        method_id='blockchainnodeengine.projects.locations.blockchainNodes.get',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsBlockchainNodesGetRequest',
        response_type_name='BlockchainNode',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists blockchain nodes in a given project and location.

      Args:
        request: (BlockchainnodeengineProjectsLocationsBlockchainNodesListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListBlockchainNodesResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/blockchainNodes',
        http_method='GET',
        method_id='blockchainnodeengine.projects.locations.blockchainNodes.list',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['filter', 'orderBy', 'pageSize', 'pageToken'],
        relative_path='v1/{+parent}/blockchainNodes',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsBlockchainNodesListRequest',
        response_type_name='ListBlockchainNodesResponse',
        supports_download=False,
    )

    def Patch(self, request, global_params=None):
      r"""Updates the parameters of a single blockchain node.

      Args:
        request: (BlockchainnodeengineProjectsLocationsBlockchainNodesPatchRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Patch')
      return self._RunMethod(
          config, request, global_params=global_params)

    Patch.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/blockchainNodes/{blockchainNodesId}',
        http_method='PATCH',
        method_id='blockchainnodeengine.projects.locations.blockchainNodes.patch',
        ordered_params=['name'],
        path_params=['name'],
        query_params=['requestId', 'updateMask'],
        relative_path='v1/{+name}',
        request_field='blockchainNode',
        request_type_name='BlockchainnodeengineProjectsLocationsBlockchainNodesPatchRequest',
        response_type_name='Operation',
        supports_download=False,
    )

  class ProjectsLocationsOperationsService(base_api.BaseApiService):
    """Service class for the projects_locations_operations resource."""

    _NAME = 'projects_locations_operations'

    def __init__(self, client):
      super(BlockchainnodeengineV1.ProjectsLocationsOperationsService, self).__init__(client)
      self._upload_configs = {
          }

    def Cancel(self, request, global_params=None):
      r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

      Args:
        request: (BlockchainnodeengineProjectsLocationsOperationsCancelRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (GoogleProtobufEmpty) The response message.
      """
      config = self.GetMethodConfig('Cancel')
      return self._RunMethod(
          config, request, global_params=global_params)

    Cancel.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel',
        http_method='POST',
        method_id='blockchainnodeengine.projects.locations.operations.cancel',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}:cancel',
        request_field='cancelOperationRequest',
        request_type_name='BlockchainnodeengineProjectsLocationsOperationsCancelRequest',
        response_type_name='GoogleProtobufEmpty',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

      Args:
        request: (BlockchainnodeengineProjectsLocationsOperationsDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (GoogleProtobufEmpty) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}',
        http_method='DELETE',
        method_id='blockchainnodeengine.projects.locations.operations.delete',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsOperationsDeleteRequest',
        response_type_name='GoogleProtobufEmpty',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

      Args:
        request: (BlockchainnodeengineProjectsLocationsOperationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}',
        http_method='GET',
        method_id='blockchainnodeengine.projects.locations.operations.get',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsOperationsGetRequest',
        response_type_name='Operation',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

      Args:
        request: (BlockchainnodeengineProjectsLocationsOperationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListOperationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}/operations',
        http_method='GET',
        method_id='blockchainnodeengine.projects.locations.operations.list',
        ordered_params=['name'],
        path_params=['name'],
        query_params=['filter', 'pageSize', 'pageToken'],
        relative_path='v1/{+name}/operations',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsOperationsListRequest',
        response_type_name='ListOperationsResponse',
        supports_download=False,
    )

  class ProjectsLocationsService(base_api.BaseApiService):
    """Service class for the projects_locations resource."""

    _NAME = 'projects_locations'

    def __init__(self, client):
      super(BlockchainnodeengineV1.ProjectsLocationsService, self).__init__(client)
      self._upload_configs = {
          }

    def Get(self, request, global_params=None):
      r"""Gets information about a location.

      Args:
        request: (BlockchainnodeengineProjectsLocationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Location) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations/{locationsId}',
        http_method='GET',
        method_id='blockchainnodeengine.projects.locations.get',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1/{+name}',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsGetRequest',
        response_type_name='Location',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists information about the supported locations for this service.

      Args:
        request: (BlockchainnodeengineProjectsLocationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListLocationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1/projects/{projectsId}/locations',
        http_method='GET',
        method_id='blockchainnodeengine.projects.locations.list',
        ordered_params=['name'],
        path_params=['name'],
        query_params=['filter', 'pageSize', 'pageToken'],
        relative_path='v1/{+name}/locations',
        request_field='',
        request_type_name='BlockchainnodeengineProjectsLocationsListRequest',
        response_type_name='ListLocationsResponse',
        supports_download=False,
    )

  class ProjectsService(base_api.BaseApiService):
    """Service class for the projects resource."""

    _NAME = 'projects'

    def __init__(self, client):
      super(BlockchainnodeengineV1.ProjectsService, self).__init__(client)
      self._upload_configs = {
          }
