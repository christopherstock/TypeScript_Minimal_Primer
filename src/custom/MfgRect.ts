
    /*******************************************************************************************************************
    *   A rectangular in 2D space.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgRect
    {
        /** The left coordinate. */
        public              x               :number                     = 0;
        /** The top coordinate. */
        public              y               :number                     = 0;
        /** The horizontal dimension. */
        public              width           :number                     = 0;
        /** The vertical dimension. */
        public              height          :number                     = 0;
        /** The fill color. */
        public              color           :string                     = null;

        /***************************************************************************************************************
        *   Constructs a new rectangular in 2D space.
        *
        *   @param x      Left coordinate.
        *   @param y      Top coordinate.
        *   @param width  Horizontal dimension.
        *   @param height Vertical dimension.
        *   @param color  Fill color.
        ***************************************************************************************************************/
        public constructor(x:number, y:number, width:number, height:number, color:string)
        {
            this.x      = x;
            this.y      = y;
            this.width  = width;
            this.height = height;
            this.color  = color;
        }

        /***************************************************************************************************************
        *   Fills a rect with the specified dimensions and color.
        *
        *   @param ctx The rendering context.
        ***************************************************************************************************************/
        public draw(ctx:CanvasRenderingContext2D):void
        {
            ctx.fillStyle = this.color;
            ctx.fillRect( this.x, this.y, this.width, this.height );
        }
    }
