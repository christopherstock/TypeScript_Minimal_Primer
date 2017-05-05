
    /*******************************************************************************************************************
    *   Offers independent drawing functionality for the 2D canvas rendering context.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class MfgDrawing
    {
        /***************************************************************************************************************
        *   Fills a rect with the specified dimensions and color.
        *
        *   @param ctx    The rendering context.
        *   @param x      The left  coordinate.
        *   @param y      The right coordinate.
        *   @param width  The desired width.
        *   @param height The desired height.
        *   @param col    A fill color.
        ***************************************************************************************************************/
        public static fillRect( ctx:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, col:string )
        {
            ctx.fillStyle = col;
            ctx.fillRect( x, y, width, height );
        }
    }
