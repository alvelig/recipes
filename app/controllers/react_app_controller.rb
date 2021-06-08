# frozen_string_literal: true

class ReactAppController < ApplicationController
  layout "react_app"

  def index
    @react_app_props = {}
  end
end
