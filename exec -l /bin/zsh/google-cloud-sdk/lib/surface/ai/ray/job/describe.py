# -*- coding: utf-8 -*- #
# Copyright 2025 Google LLC. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Command to get a serverless ray job in Vertex AI."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.ai.serverless_ray_jobs import client
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.ai import constants
from googlecloudsdk.command_lib.ai import endpoint_util
from googlecloudsdk.command_lib.ai.serverless_ray_jobs import flags


@base.ReleaseTracks(base.ReleaseTrack.GA)
@base.UniverseCompatible
class DescribeGA(base.DescribeCommand):
  """Get detailed information about the servless ray job by given id.

  ## EXAMPLES

  To get a job ``123'' under project ``example'' in region
  ``us-central1'', run:

    $ {command} 123 --project=example --region=us-central1
  """

  _api_version = constants.GA_VERSION

  @staticmethod
  def Args(parser):
    flags.AddServerlessRayJobResourceArg(parser, 'to describe')

  def Run(self, args):
    serverless_ray_job_ref = args.CONCEPTS.serverless_ray_job.Parse()
    # TODO(b/390723702): Add request validation
    region = serverless_ray_job_ref.AsDict()['locationsId']

    with endpoint_util.AiplatformEndpointOverrides(
        version=self._api_version, region=region):
      response = client.ServerlessRayJobsClient(version=self._api_version).Get(
          serverless_ray_job_ref.RelativeName()
      )
      return response


@base.ReleaseTracks(base.ReleaseTrack.BETA)
class DescribePreGA(DescribeGA):
  """Get detailed information about the custom job by given id.

  ## EXAMPLES

  To get a job ``123'' under project ``example'' in region
  ``us-central1'', run:

    $ {command} 123 --project=example --region=us-central1
  """

  _api_version = constants.BETA_VERSION
